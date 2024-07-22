import { Card } from '@/components/ui/card'
import { QiitaUser } from '@/type'
import React from 'react'
import UserInfo from './UserInfo'
import UserItems from './UserItems'

const UserContainer = ({ userData }: { userData?: QiitaUser }) => {
  return (
    <>
      {userData && (
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <UserInfo userData={userData} />
          </Card>
          <UserItems userData={userData} />
        </div>
      )}
    </>
  )
}

export default UserContainer
