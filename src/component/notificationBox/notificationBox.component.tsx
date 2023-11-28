import './notificationBox.scss'

import { NotificationBoxProps } from './notificationBox.type'

const NotificationBox = ({ texts, type, isVisible }: NotificationBoxProps) => {
	const className: string = isVisible
		? `notification_body notificaton_${type}`
		: `notification_body notification_hidden notificaton_${type}`

	return (
		<div
			className={`notification_container ${
				!isVisible ? 'notification_hidden' : ''
			}`}>
			{Array.isArray(texts) ? (
				texts.map((text, index) => (
					<p
						key={index}
						className={text ? className : `notification_body notification_hidden notificaton_${type}`}>
						{text}
					</p>
				))
			) : (
				<div className={className}>
					<p>{texts}</p>
				</div>
			)}
		</div>
	)
}

export default NotificationBox
