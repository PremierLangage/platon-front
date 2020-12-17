import { ServerError } from './server-error';
import { HttpErrorResponse } from '@angular/common/http';

export const testHttpErrorResponse: () => HttpErrorResponse = () => new HttpErrorResponse({
  status: 404,
  error: {type: 'ItemNotFound', message: 'message'}
});
export const testErrorEvent: () => ErrorEvent = () => new ErrorEvent('ItemNotFound', {
  error: testHttpErrorResponse(),
  message: 'errorMessage'
});

describe('ServerError', () => {

  it('should create', () => {
    expect(new ServerError('title', 'message')).toBeTruthy();
  });

  it('should toString', () => {
    expect(new ServerError('title', 'message').toString()).toBe('title: message');
  });

  it('should create from unexpected error', () => {
    const error = ServerError.fromError({});
    expect(error.title).toBe('Unexpected error');
    expect(error.message).toBeUndefined();
  });

  it('should create from backend string ServerError', () => {
    const error = ServerError.fromError({status: 500, error: JSON.stringify({message: 'message', trace: 'trace'})});
    expect(error.title).toBe('Error 500');
    expect(error.message).toBe('message');
    expect(error.trace).toBe('trace');
  });

  it('should create from backend ServerError', () => {
    const error = ServerError.fromError({status: 500, error: {message: 'message', trace: 'trace'}});
    expect(error.title).toBe('Error 500');
    expect(error.message).toBe('message');
    expect(error.trace).toBe('trace');
  });

  it('should create from backend other error', () => {
    const error = ServerError.fromError({status: 404, message: 'message'});
    expect(error.title).toBe('Error 404');
    expect(error.message).toBe('message');
  });
});
