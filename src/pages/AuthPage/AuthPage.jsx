import { Navigate } from 'react-router-dom'

import CreateUserForm from '@Components/CreateUserForm'

import PageLayout from '@Layouts/PageLayout'

import useAuth from '@Hooks/useAuth'

import './AuthPage.scss'


// const ideas = [
//   { id: 0, 
//     name: 'Беспроводные зарядки на партах', 
//     time_create: Date.now().toString(), 
//     time_update: Date.now().toString(),
//     status: 'На согласовании',
//     rating: '3.5',
//     risk: '0.8',
//   },
//   { id: 1, 
//     name: 'Кондиционеры в кабинетах', 
//     time_create: Date.now().toString(), 
//     time_update: Date.now().toString(),
//     status: 'На согласовании',
//     rating: '3.5',
//     risk: '0.8',
//   },
//   { id: 2, 
//     name: 'Свежая булочная на 5ом этаже ВШЦТ', 
//     time_create: Date.now().toString(), 
//     time_update: Date.now().toString(),
//     status: 'На согласовании',
//     rating: '3.5',
//     risk: '0.8',
//   },
// ]


function AuthPage() {
  const [currentUser, localStorageUser] = useAuth()

  if (currentUser || localStorageUser) {
    return <Navigate to="/" />
  }

  return (
    <PageLayout className="auth-page">
      <CreateUserForm isLogin />
      {/* {ideas.map((elem) => (
          <div key={elem.id}>
            {elem.name}
            {elem.time_create}
            {(elem.time_create !== elem.time_update) && (elem.time_update)}
            {elem.status}
            {elem.rating}
            {elem.risk}
          </div>
        ))} */}
    </PageLayout>
  )
}

export default AuthPage
