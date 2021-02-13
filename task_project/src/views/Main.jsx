import Content from '../components/home/Content';
import SideLefBar from '../components/home/SideLefBar';

const Main = (props) => {
    return (
    <div className="main" >
        <SideLefBar/>
        <Content />
    </div>
    );
}

export default Main