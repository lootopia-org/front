import { createAuthClient } from "better-auth/client";

type AuthPayload = {
  email: string;
  password: string;
};

type RegisterPayload = AuthPayload & {
  fullName: string;
};

type AuthResult = {
  accessToken?: string;
  refreshToken?: string;
  user?: unknown;
};

const AUTH_BASE_URL =
  process.env.EXPO_PUBLIC_AUTH_BASE_URL ??
  process.env.EXPO_PUBLIC_API_URL ??
  process.env.BETTER_AUTH_URL ??
  "http://localhost:3000/api/auth";

const authClient = createAuthClient({
  baseURL: AUTH_BASE_URL,
  disableDefaultFetchPlugins: true,
});

let inMemoryAccessToken: string | null = null;

function normalizeAuthResult(payload: unknown): AuthResult {
  const response = (payload ?? {}) as Record<string, unknown>;
  const accessToken =
    (response.accessToken as string | undefined) ??
    (response.access_token as string | undefined) ??
    (response.token as string | undefined);
  const refreshToken =
    (response.refreshToken as string | undefined) ??
    (response.refresh_token as string | undefined);

  return {
    accessToken,
    refreshToken,
    user:
      response.user ??
      (response.data as Record<string, unknown> | undefined)?.user,
  };
}

function toAuthError(error: unknown) {
  if (!error) {
    return "Erreur serveur";
  }
  if (error instanceof Error) {
    return error.message;
  }

  const err = error as Record<string, unknown>;
  if (typeof err.message === "string") {
    return err.message;
  }
  if (typeof err.statusText === "string") {
    return err.statusText;
  }
  return "Erreur serveur";
}

export async function loginUser(payload: AuthPayload) {
  const response = await authClient.signIn.email({
    email: payload.email,
    password: payload.password,
  });

  if (response.error) {
    throw new Error(toAuthError(response.error));
  }

  return normalizeAuthResult(response.data);
}

export async function registerUser(payload: RegisterPayload) {
  const response = await authClient.signUp.email({
    email: payload.email,
    password: payload.password,
    name: payload.fullName,
  });

  if (response.error) {
    throw new Error(toAuthError(response.error));
  }

  return normalizeAuthResult(response.data);
}

export async function getSession() {
  const response = await authClient.getSession();
  if (response.error) {
    throw new Error(toAuthError(response.error));
  }
  return response.data;
}

export async function signOutUser() {
  const response = await authClient.signOut();
  if (response.error) {
    throw new Error(toAuthError(response.error));
  }
  inMemoryAccessToken = null;
}

export async function saveAuthToken(token: string) {
  inMemoryAccessToken = token;
}

export function getAuthToken() {
  return inMemoryAccessToken;
}

export function clearAuthToken() {
  inMemoryAccessToken = null;
}
