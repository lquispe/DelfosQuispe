import { Container, Card, Row, Col, Button, Form, hr ,Modal} from "react-bootstrap"
import { faPhone,faEnvelope ,faMapMarker} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer=()=>{

    return(
        <footer className="bg-dark" id="footer">
        <Container>
            <Row>

                <Col md={4} className="col-md-4 pt-5">
                    <h2 class="h2 text-success  pb-3 border-light logo">Delfos</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                        <FontAwesomeIcon icon={faMapMarker} />
                            123 Consectetur at ligula 10660
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faPhone} />
                            <a class="text-decoration-none navlinkWhite" href="tel:010-020-0340">010-020-0340</a>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                            <a class="text-decoration-none navlinkWhite" href="mailto:info@company.com">info@company.com</a>
                        </li>
                    </ul>
                </Col>


                

            </Row>

            
        </Container>

        
    </footer>

        
    )

}
export default Footer;