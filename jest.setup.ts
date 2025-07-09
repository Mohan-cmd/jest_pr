// jest.setup.ts

// Add extra DOM matchers like toBeInTheDocument()
import '@testing-library/jest-dom';

// (Optional) Simulate user interactions more realistically
import '@testing-library/user-event';

// (Optional) Mock global APIs or set up things like fetch or localStorage
// Example (if you're using fetch):
// import 'whatwg-fetch'; // or use jest-fetch-mock

// You can also add global mocks or polyfills here
import {server} from './src/mockServices/server'

beforeAll(()=>server.listen())
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())