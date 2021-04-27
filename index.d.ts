import * as React from 'react'

export interface PlayerProps extends React.ClassAttributes<Player> {
	
}

declare class Player extends React.Component<PlayerProps, any> {

}

declare module 'react-stream-player' {

}

export default Player