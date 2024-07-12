import {useTheme} from "shared/lib";
import {classNames} from "shared/lib";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const { theme} = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>


            <AppRouter/>
        </div>
    );
};

export default App;