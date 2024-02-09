import Header from "../components/Header"
import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"


const MarketPlace = () => {
    const Products = [
        {
          id: 1,
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha&.v=1632861342000',
          price: '199,88',
          title: 'AirPods Pro'
        },
        {
          id: 2,
          img: 'https://www.apple.com/autopush/ww/search/modules/applewatchse-cellular/image__f751h9dcntqy_large_2x.jpg?',
          price: '149,99',
          title: 'Apple Watch SE'
        },
        {
          id: 3,
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHKK3?wid=532&hei=582&fmt=png-alpha&.v=1597522761000',
          price: '1299,00',
          title: 'MacBook Pro 13-inch'
        },
        {
          id: 4,
          img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAGBwAFAQQIAgP/xABBEAABAwMBBAYFCQUJAAAAAAABAgMEAAURIQYSMbEHE0FRdLIiN2FxgRQyZHJzkaHB0RcjJTRjFRYmJ1WCkpPw/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EACoRAAICAgIBBAAFBQAAAAAAAAABAgMEESExEhMyQVEiIzM0gRQVYbHw/9oADAMBAAIRAxEAPwB4UAVNz2ggW2UzFkyGG3n1brSHXQkuK7kg8TwqyiBJV8ahxXZMlIQ00grWre0AAyTU+AC4c6erKHFBqz3BxAOArKBn28aroDz+3q1dliuB/wB6KNMNE/b1bMZ/sG4f800eL+idM8/t9tP+iTv+xFQQex08W0jIsFxx9ZNW8ZfQaMK6e7Uk4XYrgk9xWioaa7A8jp9tORvWScB2kOIqAGds3fYW0lmjXW2qUqO+DgLGFJIOCCO8GgCzoAzQAFbRbO2y83WPMuEdTr0R0lpQWQBrnXvGQKckmkQaO36sbG3j2xHfKal9Ac5QQVNAJ1I41oxaZ2r8C2Og+CwZCk4yK1/0t0e4jE0WcZeRVojUaV0sjchBeiJCHRqUDgr9DSbsOM+Y8MXZTtbiXwmMRILBeXj90nCRxOndXUhpQSI2kgUvS0XGcZA3kp3QkA8dKwZGKrrPNsXKPk9miYje6TvL0GaTPAhGLabKuB0h0CH/AC7j+Je81cooMWgCUAD8s4ku/XNPj0QDHSAr/Bt38K55TQ+gObYi1NOBwdnZ3itOC5Vy9REhPEY+UNpcb1SrUV6iNilFSQzZqXHrrS+28ASy4cKT2ZrkZ7VMvP4YKbiy5hOpksIeaOUKGQaiqanHyRtjJSW0aF9jlspfSDhfoq9/ZT0xNsedorTDklpTvVK3QM47T7hVZvxjsX0aHypsgghQyMcKwSzq5Ra0yjkmdHdAfq7Y8S7zrkixi0AZoAGpysS3vrmnx6IBfb1Wdj7t4Vzymh9Ac5tJJbTWvH/TRIX7AOpkvyYK8ZQOsR7uCvyrdh5O5yq/7/IJ6CHaqyiRY5ISn020dYn3p15Zp2XX61Tiuw2UuxTAXKXb+zq99HvHHn+FLdSqgkvgfXLXAS3WzlqE86Wt/qkFYTju1qnqePIxzTQJLktvth1pYUhQyCKarIzXlF8FNp8lRNjRXwtYT6YBO8k4zWK+muactcipNfA/OgP1dseJd51yCgxaAJQAKXFeJr/1zzp8eiAW26XnZK6j6M55TQ+gEFERlhJrbjL8pElns+1NtrpubCtxZCkoBTnIOhP/ALuquPTOL9Uq2bMnaS9KS40/NLjbgKVIU2nGD7hWhZFkXvZGy16P5kf+88RTziGcpWDvqAGqTgZ9+K0zyK7K/pjFJDRvUy2w7e85NlsNILagN5YyrTgB2/CskmtF2znyMFstlO8cKwSnOlZaYuCEuRtdclDKusUBlJA9tPlYoweyUzoPoD9XbHiXudcokYtAEoAC7qvE+R9oedPj0QC+2q87K3TwznlND6AR8AZjo+POt2L+kgGDEgtyLXGKMEFpPLX8a7EYpwRUqLvsnMVH+UQ911Q1UzwVj2d/urDdjvuI1USa2gScQptam3UKStPzkLTgj3g1j012Jaa7PISBwAHwqAPo02XDpw76ZCtzZaMWzYXGZ3FKUneVunVWtNsx6/BtrbHeKSOgOgP1dseJe51xBYxaAJQAB3deLlK+1Vzp8eiAX2xXnZi5D6M55TRLoBKWl0NrCXjhpWue41rwvJLnpk6C637RNW8pZTh9niQk6p91dquS1pMvXFdsvUbUR5BQzCivuvuKCUIOEgk8Ncmr+n8t8GqNqS4DRFpt78Fpi5xIstSRlSnGQr0jxxnhXMs1OWxE35PbAXbeHZIj7MK2W2Ky6n948tDYyNNE/n91bsLGj75IhQQMripcHDB7CK2WVwkW0U1xkriuKjlv0sfOPAg91cHMyHU3XopJ64OhOgP1dseJe51xxYxqAMUALq9LxdZY/rK50+PRAM7WLzs5cR9HX5TRLpgJRkHqknFdDFX5SLro2Y6SVDSt9S5JDDZKOuPOTLfZWlKEnqytJGVHuz7M1oveq9fY2C2GNw2hRb7c/LXqGkb27niewfE4rnWPwg5EyWlsVMOTc7rLcf61TjrrhUtSj6INRg23yh2JUtBI5EdjJbD5QVKTklPDNdXctcjoS8keUwIUxEky46XFtx1qbUSRukDPZWbJprsg5SXKTKWrjY2+gP1dseJd515cSMWgDNACvvq8XmaP6yudPj0QDe1Ks7P3Dw6/KaJdMBTwf5VHx512sH9uv5NlXsLLZC5pTfkoU0ndWhSUkjVJAzn8CPjS8TNlbk+OuGZrJuQY3CT1gSpJ4GurkR/CmXxvc0VlxHy6C7GWdFgfeDkfiKwWVqcfGRqnDyWistgMZYbUgo3ezFNr1HhGJxaetFvNkdf1YHBA51o3sdVBxXJV3G6f2XHUtLYcU8lTQBOMAjU1izsj0a9ffBFvtHL0B+rxjxLvOvOCBjUAZoAVF/V/G5/26+dPj0QDm0yv4DP+wX5TRLpgK2D/ACqPjzrtYH7eP8/7NlXsLK3Fph0rQ2lKzxUBrWyqmuEvKMeSk4Is5Vw6iMVcVq0SPbTrrFGArmL2j1EmNykAoIC+1GdRWJSTNsLFJH3qyLnyfdbYbK3VBKR39tT5aFy0uQRvUpyVKC1ApbAw2nuH61xM+UpWbfXwY5y2zoroC9XjPineYrCUGNQBDQArNqYUmPe5anGl7jrhWhYScKB1406LWiAbvcV6VapTDaFbzjSkjQ8SMVL5QCpbt94jqKRb5enEdQojlU05NlPtZeM3Ho2A3eB821Sge/qF/pWz+6264SLO1swY92Xgu22cpXf1Cv0pazm/dyym9nzdhXZQHV22cg5zkMrzypVuU5rUeCNntKdokp3Qxcce1lR/KlLIuS15Mv6k/s9MsXPGZNtnvLzootKzj7q0VZvjHU1sjy+zEuFOlNhtu0Tgve0PUqP5VGRkxujpR0Q3s6O6GrPNsuwcSPcmFsSHHFvdUsYUgKOmR2HGuPbWIgOKAJQBmgCUASgDFAE7KAJQBKAJQBKAJQBKAP/Z',
          price: '799,00',
          title: 'iPad Air (4th generation)'
        },
        {
          id: 5,
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLA42_AV1?wid=532&hei=582&fmt=png-alpha&.v=1614495251000',
          price: '249,00',
          title: 'Magic Keyboard'
        },
        {
          id: 6,
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJ2R2_AV1?wid=532&hei=582&fmt=png-alpha&.v=1614991848000',
          price: '129,00',
          title: 'Magic Mouse 2'
        },
        {
          id: 7,
          img: 'data:image/jpeg;base64,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',
          price: '1799,00',
          title: 'iMac 27-inch'
        },
        {
          id: 8,
          img: 'data:image/jpeg;base64,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',
          price: '699,00',
          title: 'iPhone 12 mini'
        },
        {
          id: 9,
          img: 'data:image/jpeg;base64,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',
          price: '1299,00',
          title: 'iPad Pro 11-inch (2nd generation)'
        },
        {
          id: 10,
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHKL3_AV1?wid=532&hei=582&fmt=png-alpha&.v=1614495251000',
          price: '799,00',
          title: 'Mac mini'
        }
      ];
      
  return (
    <>
      <Header />
      <section className="px-3  ">
        <main className="bg-gray-100 scroll  overflow-y-auto  h-screen p-4 rounded-lg  flex">
          <LeftSide />
          <div className="  w-7/12 overflow-y-auto scroll ">
            <div className="flex items-center justify-between px-5 py-3">
              <h1 className="text-lg font-semibold font-sans">
                MarketPlace
              </h1>
              <h1 className="flex items-center gap-2 text-sm">
                {" "}
                Sort by:Most Resent{" "}
              </h1>
            </div>

            <div className="grid grid-cols-4 gap-2 items-center px-4">
            {
                Products.map((item,index)=>(
                    <div  key={index} className="card card-compact w-42 bg-base-100 shadow-md">
                    <figure className="h-[200px]"><img src={item.img} className="rounded-lg " alt="Shoes" /></figure>
                    <div className=" p-2">
                      <p className="font-bold text-lg font-sans">${item.price}</p>
                      <p className="text-sm pb-1 truncate">{item.title}</p>
                      <hr />
                      <span className="flex items-center justify-between pt-0.5">
                      <span className="rating flex items-center gap-1">
                        <input type="radio" name="rating-2" className="mask mask-star-2 w-3 bg-orange-400" />
                        <span>4,9</span>
                        </span>
                        <span className="text-sm ">
                            32 sold
                        </span>
                      </span>
                    </div>
                  </div>
                ))
            }
        </div>
            
          </div>
          <div className=" h-screen w-3/12 sticky top-0 overflow-y-auto scroll">
            {/* Content for the right bar */}
            <RightSide />
          </div>
        </main>
      </section>
    </>
  )
}

export default MarketPlace