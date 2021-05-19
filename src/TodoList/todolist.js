import React, { Component } from 'react';
import { BiPencil } from "react-icons/bi";
import { BsTrash,BsTextIndentLeft } from 'react-icons/bs';

import { Button,
     ButtonDropdown,
     DropdownToggle,
     DropdownMenu, 
     DropdownItem, 
     Container, 
     Row, 
     Col,Form, FormGroup, Label, Input
      } from 'reactstrap';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            items:[]
        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo (event){
        event.preventDefault();
        this.setState({
            userInput:'',
            items:[...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    

    renderTodo(){
        return this.state.items.map((item) => {
            return (
                <div key={item} className="list-group-item">
                     <Container>
                        <Row>
                            <Col lg="6">{item} </Col>
                            <Col lg="2"><button className="btn btn-danger" onClick={this.deleteTodo.bind(this)} >Supprimer <BsTrash/></button></Col>
                            <Col lg="2"><button className="btn btn-success">Modifier<BiPencil /></button></Col>
                            <Col lg="2"> 
                                <Form>
                                    <FormGroup check inline>
                                        <Label check>
                                        <Input type="checkbox" /> Terminer
                                        </Label>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                     </Container>
                </div>
            )
        })
    }



    render() {
        return (
            <div>
                <h1 align="center">Todo</h1>
                <form className="form-row align-items-center">
                <Container>
                    <Row>
                        <Col lg="10">
                            
                            <input
                                value={this.state.userInput}
                                type="text"
                                placeholder="Ajouter un tache"
                                onChange={this.onChange.bind(this)}
                                className="form-control mb-2"
                            />
                            {/* <BsTextIndentLeft/> */}
                        </Col>

                        <Col lg="2">
                            <button 
                                onClick={this.addTodo.bind(this)}
                                className="btn btn-primary"
                                >
                        
                                Ajouter
                            </button>
                        </Col>
                    </Row>       
                </Container>
                </form>

                <div>
                <Row>
                        <Col lg="3"></Col>
                        <Col lg="6">
                        <ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }} >
                            <DropdownToggle caret>
                                Les taches
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Toutes les taches</DropdownItem>
                                <DropdownItem>Taches termineés</DropdownItem>
                                <DropdownItem>Taches en cours</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>           
                        </Col>
                        <Col lg="3"></Col>
                </Row>
                
                </div>

                <div className="list-group">
                    {this.renderTodo()}
                </div>
            </div>
        );
    }
}

export default TodoList;