import { Headers } from '@angular/http';

export function xhrHeaders() {
  const headers = new Headers();
  // headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
  // headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
  headers.append('Content-Type', 'application/json; charset=utf-8');
  headers.append('X-Requested-With', 'XMLHttpRequest');
  return { headers };
}
