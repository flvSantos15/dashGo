import {Stack, Box, Text} from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

//preciso setar tipagem pro que vou precisar
interface PaginationProps {
  totalCountOffRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1

generatePagesArray(2, 5)

//função pra gerar paginação
//recebo dois paramentros(from e to do tipo number)
function generatePagesArray(from: number, to: number){
  //retorno um array c o num de posi igual a subtr de (to - from)
  return [...new Array(to - from)]
    //mapeio(percorro) o array pra pegar o num de posi
    .map((_, index) => {
      //retorno o num inicio + a posi atual + 1
      //vai me retornar os numeros entre from e to
      return from + index + 1
    })
    .filter(page => page > 0)
}

export default function Pagination({
  totalCountOffRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps){
  //vou pegar a ultima pagina
  //pega a quantdd de registro de pg(ex 35)
  //digido por registro p pg(ex 10)
  //o meu lastPage seria 3.5, mas jogo pra cima fica 4
  //4 paginas com 10 registro cada
  const lastPage = Math.floor(totalCountOffRegisters / registerPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPage = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={['column', 'row']}
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction='row' spacing='2'>
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem number={1}/>
            {currentPage > (2 + siblingsCount) && (
              <Text color='gray.300' w='8' textAlign='center'>...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} number={page}/>
        })}

        <PaginationItem number={currentPage} isCurrent />

        {nextPage.length > 0 && nextPage.map(page => {
          return <PaginationItem key={page} number={page}/>
        })}

        {currentPage > (1 + siblingsCount) && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text color='gray.300' w='8' textAlign='center'>...</Text>
            )}
            <PaginationItem number={lastPage}/>
          </>
        )}
      </Stack>
    </Stack>
  )
}