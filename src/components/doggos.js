import { useState, useEffect } from "react";
import {
    SimpleGrid,
    Box,
    Image,
    List,
    ListItem,
    Flex,
    Spacer,
    HStack, Stack,
    Wrap, WrapItem,
    useDisclosure, Slide,
    Button, Skeleton, Text


} from '@chakra-ui/react'

export default function Doggos(props) {
  const [doggosData, setDoggosData] = useState([]);
  const [ isLoaded, setIsLoaded] = useState(false);
 
  const page = props.page

  const fetchAPI = () => {
    setIsLoaded(true)
    fetch(`https://api.thedogapi.com/v1/breeds?limit=15&page=${page?page:0}`)
    .then(value => value.json()) 
    .then(value=> {
        // console.log(value)
        // console.log(typeof value)
        setDoggosData(value)
    })
    setIsLoaded(false)
  }
  
  const skeletonFunc = (item) => {
    let items = []
    
    for (var i = 0; i < item; i++) {
     items.push(
        <Box maxW='xs' borderWidth='2px' borderRadius='lg' overflow='hidden'>
          <Skeleton boxSize='300px' />

          <Box p='6'>
          
            <Skeleton height='20px' width='15em' mb='10px'/>
            <Skeleton height='20px' width='15em'/>
          </Box>
      
        </Box>
      )
    }
    return items.map(skeleton => {
      return skeleton
  })
    
  

 
  }

  useEffect(() => {
    setIsLoaded(true)
    console.log("useefect running")
    fetchAPI() 
    setIsLoaded(false)
    
    // fetchAPI2() 
    
   
  }, [page]);

  return (
    <div>
    
    {/* {doggosData} */}
    {/* {console.log(doggosData)} */}

    {/* {doggosData.map(doggo => {
      
        return <div>{doggo.name}</div>


  
      })} */}
     
      <Flex justify='center' w='70em' mt='20px' >
      

      {isLoaded ? (
                <Stack>
                <SimpleGrid columns={3} spacing='30px'>
                 
                  {skeletonFunc(15)}   
                 </SimpleGrid>
           

                
                </Stack>
                
              ):(

            <div>
            <SimpleGrid columns={3} spacing='30px' mb='20px'>
            {doggosData.map((doggo, i) => {
      
                return (
                  <div className='card'>
                      <div className='card-inner'>
                        <div className='card-front'>

                          <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                          
                            <Image 
                            src={doggo.image.url}
                            alt={doggo.name} 
                            boxSize='320px'
                            objectFit='cover'
                            />

                            <Box p='6'>
                              <Box
                                fontWeight='semibold'
                                lineHeight='tight'
                                // noOfLines={1}
                              >
                                {doggo.name}
                              </Box>

                              <Box>
                                {doggo.id}
                              </Box>
                            </Box>
                          </Box>
                    
                        </div>

                  
                        <div className='card-back' > 
                          <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' boxSize='420px'>
                            
                  

                            <Box p='6'>
                              <Box
        
                                lineHeight='tight'
                                // noOfLines={1}
                              >
                                <Text><div className="bold-text">Name</div> {doggo.name}</Text>
                                <Text><div className="bold-text">Weight</div> {doggo.weight.metric}</Text>
                                <Text><div className="bold-text">Height</div> {doggo.height.metric}</Text>
                                <Text><div className="bold-text">Life span</div> {doggo.life_span}</Text>
                                <Text><div className="bold-text">Temperament</div> {doggo.temperament}</Text>
                                <Text><div className="bold-text">Origin</div> {doggo.origin?doggo.origin:'-'}</Text>
                                <Text><div className="bold-text">Breed group</div> {doggo.breed_group?doggo.breed_group:'-'}</Text>
                              </Box>

                            </Box>
                          </Box>
                        </div>
                  
                      </div>
                  </div>
                  )
              })}

              
            </SimpleGrid>
            </div>
              )}


       
    

</Flex>
      
      {/* <List spacing={3}>
                {doggosData.map(doggo => {
                    return <ListItem>{doggo}</ListItem>
                })}
                
        </List> */}
    </div>
  );
}
