import {useTheme} from "shared/lib";
import {classNames} from "shared/lib";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {toggleTheme, theme} = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>


            <button onClick={toggleTheme}>Toggle Theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;