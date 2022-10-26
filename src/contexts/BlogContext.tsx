import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface User {
  id: number
  login: string
  profileUrl: string
  avatarUrl: string
  name: string
  bio: string
  followers: number
}

interface Issue {
  id: number
  issueNumber: number
  issueUrl: string
  title: string
  user: string
  comments: number
  body: string
  createdAt: Date
}

interface BlogContextType {
  user: User
  issues: Issue[]
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [user, setUser] = useState<User>({
    id: 0,
    login: '',
    profileUrl: '',
    avatarUrl: '',
    name: '',
    bio: '',
    followers: 0
  })

  const [issues, setIssues] = useState<Issue[]>([
    {
      id: 0,
      issueNumber: 0,
      issueUrl: '',
      title: '',
      user: '',
      comments: 0,
      body: '',
      createdAt: new Date()
    }
  ])

  const fetchUser = async () => {
    const response = await api.get('/users/vanymartins2')

    const user = response.data

    setUser({
      id: user.id,
      login: user.login,
      profileUrl: user.html_url,
      avatarUrl: user.avatar_url,
      name: user.name,
      bio: user.bio,
      followers: user.followers
    })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchIssues = async () => {
    const response = await api.get('/search/issues', {
      params: {
        q: 'repo:vanymartins2/github-blog'
      }
    })

    const issueData = response.data.items

    setIssues(
      issueData.map((issue: any) => {
        return {
          id: issue.id,
          issueNumber: issue.number,
          issueUrl: issue.url,
          title: issue.title,
          user: issue.user.login,
          comments: issue.comments,
          body: issue.body,
          createdAt: issue.created_at
        }
      })
    )
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <BlogContext.Provider value={{ user, issues }}>
      {children}
    </BlogContext.Provider>
  )
}
