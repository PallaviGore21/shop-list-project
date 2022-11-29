import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteshopAction, GetShopsAction, UpdateshopAction } from '../redux/reduxAction'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Home() {
  const [allData, setallData] = useState([])
  const [Modal, setModal] = useState([])
    const dispatch = useDispatch()
    const { shops,deleted,updated } = useSelector(state => state.allshops)

    useEffect(() => {
    dispatch(GetShopsAction())
    setallData(shops)
    }, [deleted,updated])
    
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

const handleupdate=()=>{
dispatch(UpdateshopAction(Modal))
}


  return <>
  {JSON.stringify(Modal.id)}
  {/* {JSON.stringify(allData.id)} */}
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
                        className='col-sm-6'
                    >
                        <Card>
                            <Card.Body className='p-0 d-flex justify-between gap-3'>
                                <img className='img-fluid' src={item.Avatar} alt="" height={200} width={200}/>
                                <div>
                                <div>{item.ShopName}</div>
                                <div>Location: {item.Area}</div>
                                <div><i className='text-success'>open:{item.openingDate}</i></div>
                                <i className='text-danger'>closes : {item.closingDate}</i>

                                <button class="btn btn-warning" onClick={e=>setModal(item)} data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                <button class="btn btn-danger m-2" onClick={e=>dispatch(DeleteshopAction(item.id))}>Delete</button>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                               
                               
                            </Card.Footer>
                        </Card>
                    </Col>)
                }
            </Row> 
        </Container>

      

{/* updatemodal */}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={handleupdate}>
        <div>
          <label htmlFor="name" class="form-label">shopname</label>
          <input 
          type="text" 
          class="form-control" 
          value={Modal.ShopName}
          onChange={e=>setModal({...Modal, ShopName:e.target.value})}
          id="name" 
          placeholder="Enter shopname"/>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please choose a shopName.</div>
        </div>

        <div className='my-3'>
          <label htmlFor="email" class="form-label">Avtar</label>
          <input 
          type="Avtar" 
          class="form-control" 
          id="=Avtar"
          value={Modal.Avatar}
          onChange={e=>setModal({...Modal, Avatar:e.target.value})}
           placeholder="Enter Avatar"/>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please choose a Avatar.</div>
        </div>
      
        <select 
        class="form-select"
        value={Modal.Area}
        onChange={e=>setModal({...Modal, Area:e.target.value})}
        >
          <option selected>select Area</option>
          <option value="mumbai">mumbai</option>
                <option value="pune">pune</option>
                <option value="Nashik">Nashik</option>
                <option value="Thane">Thane</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Solapur">Solapur</option>
        </select>

        <select 
        class="form-select"
        value={Modal.Category}
        onChange={e=>setModal({...Modal, Category:e.target.value})}
        >
          <option selected>select Category</option>
          <option value="mumbai">mumbai</option>
          <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Baker">Baker</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationary Shop">Stationary Shop</option>
        </select>
        <button type="submit" data-bs-dismiss="modal" class="btn btn-primary w-100 btn-lg mt-3">Update User</button>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



  </>
}