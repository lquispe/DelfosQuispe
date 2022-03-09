import { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { getCategories } from '../services/Producto';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';


const Categories = () => {

  const [categories, setCategories] = useState([])
  const [setLoading] = useOutletContext();
  const navigate = useNavigate();


  /*
  
    useEffect(() => {
      let mounted = true
      setLoading(true)
      getCategories("MLA").then(results => {
        if(mounted) {
          setCategories(results)
          setTimeout(() => {
            setLoading(false)
          }, 3000)
        }
      })
      return () => mounted = false;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])*/
  useEffect(() => {
    getDocs(collection(db, "categorias"))
      .then(docs => {
        let preCategories = []
        docs.forEach(doc => {
          preCategories.push({ id: doc.id, ...doc.data() })
        })
        setCategories(preCategories)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {categories.map(category => {
          return (
            <Col className="mt-2" xs={2}>
              <Card>
                <Card.Title style={{ height: 80, paddingTop: 5 }}>{category.name}</Card.Title>
                <Button variant="primary" onClick={() => navigate(`/category/${category.id}`)}>Ver productos</Button>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  );
}

export default Categories;