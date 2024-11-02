import { useState } from 'react';
import { Box, Button, Container, Heading, useColorModeValue, VStack } from '@chakra-ui/react';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
    });

    const handleAddProduct = () => {
        console.log(newProduct);
    };

    return (
        <Container maxW={'container.sm'}>
            <VStack spacing={8}>
                <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
                    Create New Product
                </Heading>

                <Box
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    p={6}
                    rounded={'lg'}
                    shadow={'md'}
                >
                    <VStack spacing={4}>
                        <input
                            placeholder='Product Name'
                            name='name'
                            type='text'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <input
                            placeholder='Price'
                            name='price'
                            type='number'
                            value={newProduct.price}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, price: e.target.value })
                            }
                        />
                        <input
                            placeholder='Image URL'
                            name='image'
                            type='text'
                            value={newProduct.image}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, image: e.target.value })
                            }
                        />

                        <Button colorScheme='blue' onClick={handleAddProduct}>
                            Add Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default CreatePage;
