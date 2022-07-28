import {React, useState, useEffect} from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Doggos from './doggos'
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import '../App.css'
import {
  SimpleGrid,
  Box,
  Image,
  List,
  ListItem,
  Flex,
  Spacer,
  HStack,
  Wrap, WrapItem,


} from '@chakra-ui/react'


export default function Page(props) {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {


    changePage(0)
    
   
  }, []);

  const changePage = (x) => {
    let save = pageIndex
    save += x
   
  
    if (save < 0){
      setPageIndex(11)
    } else if (save > 11) {
      setPageIndex(0)
    } else {

      setPageIndex(pageIndex + x)
    }
    
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
  }

  return (
    <div>
    <Flex flexDirection="row" justify='center' >
      <div className='leftButton'>
        <Button  _hover={{ bg: 'teal', borderColor: 'white', color:'white' }} colorScheme='teal' variant='outline' onClick={()=>{changePage(-1)}} sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '300', }}>
          <ChevronLeftIcon/>
        </Button>
        </div>
        <Doggos page={pageIndex}/>


        <Button _hover={{ bg: 'teal', borderColor: 'white', color:'white' }} className='rightButton' colorScheme='teal' variant='outline' onClick={()=>{changePage(1)}} sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '300', }}>
          <ChevronRightIcon/>
        
           
        </Button>
      </Flex>   

    </div>
  )
}
