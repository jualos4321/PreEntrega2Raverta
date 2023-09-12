import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const {categoria} = useParams ()
    
    const productos = [
        { id: 1, nombre: "producto1", descripcion: "descripcion1", categoria: "A" },
        { id: 2, nombre: "producto2", descripcion: "descripcion2", categoria: "A" },
        { id: 3, nombre: "producto3", descripcion: "descripcion3", categoria: "B" },
        { id: 4, nombre: "producto4", descripcion: "descripcion4", categoria: "B" },
        { id: 5, nombre: "producto5", descripcion: "descripcion5", categoria: "C" }
    ]

    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject(new Error("no hay datos"))
        }
    })

    getProductos
        .then((res) => {
        })
        .catch((err) => {
            console.log(Error)
        })

        const filtredProducts = productos.filter((producto) => producto.categoria === categoria)
    
    return (
        <>
            <Flex>
                <Spacer />
                <Box pr="770">
                    <h1>{greeting}</h1>
                </Box>
            </Flex>
            <Flex>
                {
                categoria ? <ItemList productos={filtredProducts} /> : <ItemList productos={productos} />
                }
            </Flex>
        </>
    )
}

export default ItemListContainer