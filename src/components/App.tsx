import {useState} from "react";
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
// import About from "@/pages/about/About";
import png from '@/assets/png_.png'
import jpg from '@/assets/jpg_.jpg'
import Svg from '@/assets/svg_.svg'

const App = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => setCounter(prevState => prevState + 1)

    if(__PLATFORM__ === 'mobile') {
        return <h1>MOBILE CODE HERE {__PLATFORM__}</h1>
    }

    return (
        <div data-testid={'App'}>
            <h1 data-testid={'Platform'}>PLATFORM {__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={png} alt=''/>
                {png}
            </div>
            <div>
                <img width={100} height={100} src={jpg} alt=''/>
                {jpg}
            </div>
            <div>
                {/*<img width={100} height={100} src={svg} alt=''/>*/}
                <Svg width={50} height={50} style={{color: 'green'}} fill={'red'}/>
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1>{counter}</h1>
            <button className={classes.button} onClick={increment}>inc</button>
            <Outlet/>
            {/*<About />*/}
        </div>
    )
}

export default App
