import {render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom';
import App from "./App";

test("Other First react app test case",()=>{
    render(<App/>)
    const text = screen.getByText('Vite + React')
    const image = screen.getByTitle('React logo')
    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
})

test("Other increments count when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });
    expect(button).toHaveTextContent('count is 0');
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
});

test("Other wverify the input field",()=>{
    render(<App/>);
     const input = screen.getByPlaceholderText('Enter your name');
   // const input = screen.getByRole('textbox')
    
    expect(input).toBeInTheDocument();
    fireEvent.change(input,{target:{value:'mrthygf'}})
    expect(input).toHaveValue('mrthygf')
    expect(input).toHaveAttribute('name','Username')
});

test("snapshot for APp component",()=>{
    const {container} = render(<App/>)
    expect(container).toMatchSnapshot();
})
