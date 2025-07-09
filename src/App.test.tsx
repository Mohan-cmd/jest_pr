import {render, screen, fireEvent, within, act, prettyDOM, logRoles} from "@testing-library/react"
import '@testing-library/jest-dom';
import App from "./App";
import dbCleanUp from "./service";
import handleOtherMethod from "./helper";
import userEvent from "@testing-library/user-event";
import User from "./User";
import Propsfunc from "./Propsfunc";
import Apimocking from "./Apimocking";
beforeAll(()=>{
    console.log('********* Inside Before All Started App.test *********')
})

afterAll(()=>{
    console.log('********* Inside After All Ended App.test *********')

})

beforeEach(()=>{
    console.log('********* Inside Before Each TestStarted *********')
    dbCleanUp()
})

afterEach(()=>{
    console.log('********* Inside After Each Test Ended *********')
})


test("First react app test case",()=>{
    render(<App/>)
    const text = screen.getByText('Vite + React')
    const image = screen.getByTitle('React logo')
    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
})

test("increments count when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });
    expect(button).toHaveTextContent('count is 0');
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
});

test("verify the input field",()=>{
    render(<App/>);
     //const input = screen.getByPlaceholderText('Enter your name');
    const input = screen.getByRole('textbox',{name:'Username'})
    
    expect(input).toBeInTheDocument();
    fireEvent.change(input,{target:{value:'mrthygf'}})
    expect(input).toHaveValue('mrthygf')
    expect(input).toHaveAttribute('aria-label','Username')
});


describe("All UI test cases",()=>{
    test("verify the input field",()=>{
        render(<App/>);
        const input = screen.getByPlaceholderText('Enter your name');
        //const input = screen.getByRole('textbox')
        
        expect(input).toBeInTheDocument();
        fireEvent.change(input,{target:{value:'mrthygf'}})
        expect(input).toHaveValue('mrthygf')
        expect(input).toHaveAttribute('aria-label','Username')
        
        const inputP = screen.getByRole('textbox',{name:'Password'})
        expect(inputP).toBeInTheDocument();
    });
})

test("verify the button",()=>{
    render(<App/>);
    const btn = screen.getByRole('button',{name:'Submit'})
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.getByText('updated Data')).toBeInTheDocument();
})

test("verify the other method",()=>{
   expect(handleOtherMethod()).toBe('hello')
})


test("verify getAllByRole",()=>{
    render(<App/>);
    // const buttons = screen.getAllByRole('button')
    // expect(buttons).toHaveLength(2)
    // expect(buttons[0]).toHaveTextContent('Click Me1')
    // expect(buttons[1]).toHaveTextContent('Click Me2')

    // for(let i=0;i<buttons.length;i++){
    //     expect(buttons[i]).toHaveTextContent(`Click Me${i+1}`)
    // }

    const options = screen.getAllByRole('option')
        for(let i=0;i<options.length;i++){
            expect(options[i]).toHaveTextContent(`${i+1}`)
        }
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()

    const div = screen.getByTestId('div-test-id')
    expect(div).toHaveTextContent('testing with testid')
})

test("verify button with title",()=>{
    render(<App/>);
    const btn = screen.getByTitle('click me')
    expect(btn).toBeInTheDocument();
})

test("verify all assertions",()=>{
    render(<App/>);
    // const input = screen.getByRole('textbox')
    // expect(input).toBeInTheDocument()
    // expect(input).toHaveValue();
    // expect(input).toHaveValue('mohan fsdv')
    // expect(input).toBeEnabled();
    // expect(input).toBeDisabled();
   
})


test("verify Negative cases",()=>{
    render(<App/>);
    const btn = screen.getByRole('button',{name:'Clickee'})
    // expect(btn).not.toBeDisabled()
    expect(btn).toHaveAttribute('id','btn-test-id')
})

test("text match with string",()=>{
    render(<App/>);
    //const div = screen.getByText('Hello',{exact:false})
    const div = screen.getByText(/Hello W?orld/i)
    // i means case insensitive
    expect(div).toBeInTheDocument()
})

test("text match with function",()=>{
    // render(<App/>);
    // const div1 = screen.getByText((content,element)=>content.startsWith('Hello'))
    // const div2 = screen.getByText((content,element)=>content.endsWith('ld'))
    // const div3 = screen.getByText((content,element)=>content.includes('Hello'))

    // const div4 = screen.getByText((content,element)=>{
    //     return content.includes('ll')
    // })

})

test("verify QueryBy for hidden  ",()=>{
    render(<App/>);
    const login = screen.queryByText('Login')
    const logout = screen.queryByText('Logout')
    // expect(login).not.toBeInTheDocument()
    // expect(logout).toBeInTheDocument()
})

test("verify FindBy",async ()=>{
render(<App/>);
// by default it waits for 1 second if exceeds we need to specify timeout parameter
const data = await screen.findByText('Data is loaded',{},{timeout:2000})
expect(data).toBeInTheDocument()
})

test("test case with custom query",()=>{
    render(<App/>);
    const element = document.querySelector('#btn-test-id')
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('id','btn-test-id')
    expect(element).toHaveTextContent('Clickee')
})

test("Test with within Function",()=>{
    render(<App/>);
    let el = screen.getByText('afscdf111')
    expect(el).toBeInTheDocument()
    let subELe = within(el).getByText('HI')
    expect(subELe).toBeInTheDocument()
   
})

test("Test with user event library",async()=>{
    userEvent.setup()
    render(<App/>);
    const btn = screen.getByText('IsButtonVisible')
    expect(btn).toBeInTheDocument()
    await userEvent.click(btn)
    expect(screen.getByText('Buttonisvisible')).toBeInTheDocument()
})

test("Test with onChnage user event library",async()=>{
    userEvent.setup()
    render(<App/>);
    const inputln = screen.getByRole('textbox',{name:'lastname'})
    expect(inputln).toBeInTheDocument()
    await act(async()=>await userEvent.type(inputln,'kumar'))
    expect(screen.getByText('kumar')).toBeInTheDocument()
})

test("Props Testing",()=>{
    const name='kjnkj'
    render(<User name={name}/>)
    const h1 = screen.getByText(name)
    expect(h1).toBeInTheDocument()
})

test("Props Testing with function",async()=>{
    
    const testFunc = jest.fn()
    userEvent.setup()
    render(<Propsfunc testFunc={testFunc}/>)
    const btn = screen.getByText('Click me')
    expect(btn).toBeInTheDocument()
    await userEvent.click(btn)
    expect(testFunc).toHaveBeenCalled()
})

test("debugging",()=>{
    const {container} = render(<App/>)
    // console.log(container)
    // console.log(prettyDOM(container))
    // logRoles(container)
    // logroles helps in identifying each element
})

test("APi Mocking",async()=>{
    render(<Apimocking/>)
    const list = await screen.findAllByRole('listitem')
    expect(list).toHaveLength(3)
    expect(list[0]).toHaveTextContent('Leanne Graham')

})