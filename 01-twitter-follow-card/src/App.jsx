import { TwitterCard } from "./TwitterCard";

const users = [
  {
    userName: 'pdumrauf',
    name: 'Paula Luciana Dumrauf',
    isFollowing: true
  },
  {
    userName: 'kikobeats',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Migue Dev',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export default function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return(
          <TwitterCard
            key={userName}
            userName={userName}
            name={name}
            initialFollow={isFollowing}
          />
        )
      })}
    </section>
  )
}