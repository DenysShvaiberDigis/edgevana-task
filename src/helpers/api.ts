import { reqMethods } from "@/enums";

export class BaseRequest {
  constructor() {}

  static get(url: string, params: RequestInit = {}) {
    return this.send(url, {
      method: reqMethods.GET,
      ...params,
    });
  }

  static post<T>(url: string, body?: unknown, params: RequestInit = {}) {
    return this.send<T>(url, {
      ...this.getDefaultParams(reqMethods.POST, body),
      ...params,
    });
  }

  static put<T>(url: string, body?: unknown, params: RequestInit = {}) {
    return this.send<T>(url, {
      ...this.getDefaultParams(reqMethods.PUT, body),
      ...params,
    });
  }

  static delete(url: string, body?: unknown, params: RequestInit = {}) {
    return this.send(url, {
      ...this.getDefaultParams(reqMethods.DELETE, body),
      ...params,
    });
  }

  private static getDefaultParams(method: string, body?: any) {
    return {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
      },
    };
  }

  private static async send<T>(url: string, params: RequestInit = {}) {
    return fetch(url, params)
      .then(async (response) => {
        if (response.ok) {
          try {
            const parsed = {
              ...(await response.json()),
              statusCode: response.status,
              ok: response.ok,
            };
            return parsed as T;
          } catch (error) {
            console.warn('response.json() parsing error: ', error);
            return response;
          }
        }

        return await this.handleErrorResponse(response);
      })
      .catch((err) => {
        return { statusCode: err.status, ok: false };
      });
  }

  private static async handleErrorResponse(response: Response) {
    return {
      ...(await response.json()),
      statusCode: response.status,
      ok: response.ok,
    };
  }
}
