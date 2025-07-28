// 'use client'

// import React, { useState } from 'react'
// import { Button } from '@/components/ui/Button'
// import { Input } from '@/components/ui/Input'
// import { cn } from '@/lib/utils'

// export const Newsletter: React.FC = () => {
//   const [email, setEmail] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [message, setMessage] = useState('')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setMessage('')

//     try {
//       // Здесь будет API запрос для подписки
//       await new Promise(resolve => setTimeout(resolve, 1000)) // Имитация запроса
//       setMessage('Спасибо за подписку!')
//       setEmail('')
//     } catch (error) {
//       setMessage('Произошла ошибка. Попробуйте снова.')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <section className="py-20 bg-black text-white">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-light mb-6">Оставайтесь на связи</h2>
//         <p className="text-gray-300 text-lg mb-8 font-light">
//           Узнавайте первыми о новых коллекциях и эксклюзивных предложениях
//         </p>
        
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Input
//               type="email"
//               placeholder="Ваш email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="flex-1 bg-transparent border-gray-600 text-white placeholder-gray-400 focus:border-white"
//             />
//             <Button
//               type="submit"
//               loading={isLoading}
//               variant="secondary"
//               className="bg-white text-black hover:bg-gray-200"
//             >
//               Подписаться
//             </Button>
//           </div>
//           {message && (
//             <p className={cn(
//               'mt-4 text-sm',
//               message.includes('ошибка') ? 'text-red-400' : 'text-green-400'
//             )}>
//               {message}
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   )
// }