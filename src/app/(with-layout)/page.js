
import Categories from '@/components/homePage/categories'
import PopularProduct from '@/components/homePage/popularProduct';
import { Suspense } from 'react';
export const revalidate = 5;

const HomePage = () => {
  return (
    <main className='container mx-auto'>
      <h1>Home</h1>
      <Categories />
      <Suspense fallback={<h1 className='text-center text-2xl font-bold'>Loading...</h1>}>
        <PopularProduct />
      </Suspense>
    </main>
  )
}
export default HomePage