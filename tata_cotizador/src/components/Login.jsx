import React, { Component } from 'react';
import './Login.scss';

import backgroundWeb from "../resources/Base.png";
import backgroundWeb2 from "../resources/Illustration-1.png";

import icon1 from "../resources/gl_mobile-20x20.png";
import icon2 from "../resources/gl_shield-20x20.png";

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (            
            <div id="login">
                <div className = "content-login">
                    <div className="box-left"
                        style={
                            {
                                backgroundImage: `url(${backgroundWeb})`, 
                                backgroundRepeat: 'no-repeat', 
                                width: 'inherit',                            
                                height: '768px'
                            }
                        }
                    >
                        <div className="box-left"
                            style={{
                                    backgroundImage: `url(${backgroundWeb2})`, 
                                    backgroundRepeat: 'no-repeat', 
                                    width: 'inherit',                            
                                    height: '768px',
                                    padding: '48px'
                                }
                            }
                        >
                            <p className="title-1">Seguro de</p>
                            <p className="title-1 bold">Salud</p>
                            <div className="login-detail">
                                <img className="img-icon" src={icon2}></img>
                                <p className="text-det">Cómpralo de manera fácil y rápida</p>
                            </div>
                            <div className="login-detail">
                                <img className="img-icon" src={icon1}></img>
                                <p className="text-det">Cotiza y compra tu seguro 100% digital</p>
                            </div>
                            <div className="login-detail">
                                <img className="img-icon" src={icon1}></img>
                                <p className="text-det">Hasta S/.12 millones de cobertura anual</p>
                            </div>
                            <div className="login-detail">
                                <img className="img-icon" src={icon1}></img>
                                <p className="text-det">Más de 300 clínicas en todo el Perú</p>
                            </div>
                            <div className="login-detail">
                                <p className="text-copy">&#169;</p>
                                <p className="text-copy">2021 y Company</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="box-right">
                        <p className="title-dark">Obten tu <span className=""> seguro ahora</span></p>
                        <p className="subtitle-dark">Ingresa los datos para comenzar</p>
                        <div className="box-document">
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">DNI</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                
                                >
                                <MenuItem value={10}>DNI</MenuItem>
                                <MenuItem value={20}>RUC</MenuItem>
                                <MenuItem value={30}>Pasaporte</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Nro de documento" variant="outlined" />
                        </div>
                        <form noValidate className="form-date">
                            <TextField
                                variant="outlined" 
                                id="date"
                                label="Fecha de nacimiento"
                                type="date"                                
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </form>
                        <TextField id="outlined-basic" label="Celular" variant="outlined" />
                        <div>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <p>Acepto la <span>Política de protección de datos personales y los términos y condiciones</span></p>
                        </div>
                    </div>
                    
                    
              
                </div>
            </div>
        )
    
    }

}

export default Login;