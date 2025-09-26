import * as eveyProducts from "@/dto/helpers/product"
import { Factura, Usuario } from '../dto/helpers/product';

export const Products: eveyProducts.Product[] = [

{
    id: 'fksh32',
    name: 'Mouse',
    brand: 'hp',
    quantity: 50,
    price: {amount: 29, currency: 'COP'},
    isActive: true,
    specs: { color: 'gray'}, 

},
{
    id: 'hffff02',
    name: 'PC',
    brand: 'sonic',
    quantity: 10,
    price: {amount: 25, currency: 'COP'},
    isActive: false
},

];

export const Facturas: eveyProducts.Factura[] = [

{
    id: 'hasss45',
    registro: "23 marzo 2020",
    pagado: {
        isActive: true, precio: 25000,
    }
}
];

export const Usuarios: eveyProducts.Usuario[] = [

{
    id: 213413,
    name: 'Alfonsisimo',
    apellido: 'Guiterritos',
    edad: 25,
    correo: 'corre@si.com'

}

];


