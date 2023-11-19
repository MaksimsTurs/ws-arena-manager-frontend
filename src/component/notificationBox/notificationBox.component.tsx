import './notificationBox.scss'

import { NotificationBoxProps } from './notificationBox.type'

const NotificationBox = ({ texts, type, isVisible }: NotificationBoxProps) => {
	const className: string = isVisible
		? `notification_container notificaton_${type}`
		: `notification_container notification_hidden notificaton_${type}`

	return (
		<div className={className}>
			{Array.isArray(texts) ? (
				texts.map(text => <p key={text}>{text}</p>)
			) : (
				<p>{texts}</p>
			)}
		</div>
	)
}

export default NotificationBox
