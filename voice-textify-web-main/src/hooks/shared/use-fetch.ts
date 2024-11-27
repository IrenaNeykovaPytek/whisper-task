class HttpException extends Error {
  override message: string;
  status: number;

  constructor(status: number, message: string) {
    super(message);

    this.message = message;
    this.status = status;
  }
}

export type Fetch<T = unknown> = (
  path: string,
  options?: RequestInit
) => Promise<T>;

export const useFetch = <T>(): Fetch<T> => {
  return async (url: URL | string, options?: RequestInit) => {
    const response = await fetch(url, {
      ...options,
    });

    if (!response.ok) {
      throw new HttpException(
        response.status,
        `Failed to fetch ${response.url}: ${response.status} ${response.statusText}`
      );
    }

    if (response.status === 204) {
      return;
    }

    return await response.json();
  };
};
