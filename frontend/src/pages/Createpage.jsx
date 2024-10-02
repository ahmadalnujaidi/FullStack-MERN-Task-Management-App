import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../../store/product";

const Createpage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();

  const { CreateProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await CreateProduct(newProduct);
    // console.log("success: ", success);
    // console.log("message: ", message);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        // duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "success",
        description: message,
        status: "success",
        // duration: 5000,
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };
  return (
    <>
      <Container maxW={"container.sm"}>
        <VStack spacing={8}>
          <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
            Create New Task
          </Heading>
          <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            p={6}
            rounded={"lg"}
            shadow={"md"}
          >
            <VStack spacing={4}>
              <Input
                placeholder="Task Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Task Priority"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Due Date"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <Button colorScheme="blue" onClick={handleAddProduct} w="full">
                Add Task
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Createpage;
