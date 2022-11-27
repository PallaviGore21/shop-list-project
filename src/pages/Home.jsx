import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetShopsAction } from '../redux/reduxAction'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Home() {
  const [allData, setallData] = useState([])
    const dispatch = useDispatch()
    const { shops } = useSelector(state => state.allshops)

    useEffect(() => {
    dispatch(GetShopsAction())
    setallData(shops)
    }, [])
    
    const handleChooseitem=(arg)=>{
      switch (arg) {
        
        case  "Grocery": return setallData(shops.filter(item=>item.Category==arg))
        case  "Stationary": return setallData(shops.filter(item=>item.Category==arg))
        case  "Butcher": return setallData(shops.filter(item=>item.Category==arg))
        case  "Chemist": return setallData(shops.filter(item=>item.Category==arg))
        case  "Baker": return setallData(shops.filter(item=>item.Category==arg))


        case  "pune": return setallData(shops.filter(item=>item.Area==arg))
        case  "Thane": return setallData(shops.filter(item=>item.Area==arg))
        case  "Nagpur": return setallData(shops.filter(item=>item.Area==arg))
        case  "Solapur": return setallData(shops.filter(item=>item.Area==arg))
        case  "Ahmednagar": return setallData(shops.filter(item=>item.Area==arg))


        
         
        default:return setallData(shops)
          
      }
    }
  return <>
   {/* {JSON.stringify(allData)} */}
<div className='d-flex justify-between'>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        
        Choose Item
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  onClick={e=>handleChooseitem('Grocery')}>Grocery</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('Chemist')}>Chemist</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('Butcher')}>Butcher</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('Baker')}>Baker</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('Stationary')}>Stationary</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose City
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  onClick={e=>handleChooseitem('pune')}>pune</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('Thane')}>Thane</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('Nagpur')}>Nagpur</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('Solapur')}>Solapur</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('Ahmednagar')}>Ahmednagar</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>
  <Container className='py-5'>
            <Row>
                {
                    allData.map(item => <Col
                        className='col-sm-6 col-md-4'
                    >
                        <Card>
                            <Card.Body className='p-0 d-flex justify-between gap-3'>
                                <img className='img-fluid' src={item.Avatar} alt="" height={200} width={200}/>
                                <div>
                                <div>{item.ShopName}</div>
                                <div>Location: {item.Area}</div>
                                <div><i className='text-success'>open:{item.openingDate}</i></div>
                                <i className='text-danger'>closes : {item.closingDate}</i>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                               
                               
                            </Card.Footer>
                        </Card>
                    </Col>)
                }
            </Row> 
        </Container>

      
  </>
}