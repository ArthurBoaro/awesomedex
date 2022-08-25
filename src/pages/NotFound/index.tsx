import * as C from './styles';
import  AwesomedexLogo  from '../../assets/AwesomedexLogo.png';
import  psyduck  from '../../assets/psyduck.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <C.Container>
            <C.Header>
                <Link to ={'/'}>
                    <img src={AwesomedexLogo} alt='logo'/>
                </Link>
            </C.Header>
                    <C.NotFoundArea>
                        <C.NotFoundImg>
                            <img src={psyduck} alt='psyduck'/>
                        </C.NotFoundImg>
                        <C.NotFoundText>Oh No! Page Not Found!</C.NotFoundText>
                    </C.NotFoundArea>
                <C.Footer>WebApp built only for educational proporses.</C.Footer>
        </C.Container>
           
    );
};

export { NotFound };