import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  
} from "reactstrap";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const CartModal = (props) => {
  const store = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { buttonLabel, title, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let priceTruncator = function(total, array){
    return parseFloat((total + (array.price* array.qty)).toFixed(2))
  }

 
  let cost = store.cart.reduce(priceTruncator,0)

  return (
    <div>
      <Button color="dark" onClick={toggle}>
        <FontAwesomeIcon icon={faShoppingCart} /> <div>1</div>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
            {store.cart.map((product) => (
              <FormGroup key={product.id}>
                <img
                  src={product.src}
                  style={{ height: 150 }}
                  alt={product.name}
                />
                <Label for="item">{product.name}</Label>

                <InputGroup>
                  <Input
                    type="number"
                    name="qty"
                    onChange={props.handleChange(product)}
                    value={product.qty}
                    
                  />
                  <InputGroupAddon addonType="append" />{" "}
                  <InputGroupText for="price"  color="danger">
                    $ {product.price}
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
            ))}
            
          $ {cost}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CartModal;
