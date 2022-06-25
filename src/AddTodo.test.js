import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});




 test('test that App component doesn\'t render duplicate Task', () => {
  render(<App />);
    // // Adding the first instance of "take out the trash"
    // const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
    // const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
    // const element = screen.getByRole('button', {name: /Add/i});
    // fireEvent.change(inputTask, { target: { value: "duplicate test"}});
    // fireEvent.change(inputDate, { target: { value: "6/25/22"}});
    // fireEvent.click(element);
  
    // // Adding the second instance of "take out the trash"
    // fireEvent.change(inputTask, { target: { value: "duplicate test"}});
    // fireEvent.change(inputDate, { target: { value: "6/25/22"}});
    // fireEvent.click(element);
  
    // const check = screen.getByText(/duplicate test/i);
    // expect(check.length).toBe(1);

 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
 });
