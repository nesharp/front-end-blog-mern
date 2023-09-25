import { FC, FormEvent } from 'react'
import styles from './AddPostPage.module.scss'
import { FormInput } from '../../ui/FormInput/FormInput'
import Button from '../../ui/Button/Button'
import { TextArea } from '../../ui/TextArea/TextArea'
import { PostService } from '@/src/services/post/post.service'
import { useRouter } from 'next/navigation'
export const AddPostPage: FC = () => {
	const router = useRouter()

	return (
		<div className={styles.wrapper}>
			<h1>Post add</h1>
			<form
				action='submit'
				className={styles.form}
				onSubmit={e => {
					submitHandler(e)
					router.push('/')
				}}
			>
				<div className={styles.inputWrapper}>
					<FormInput placeholder='Title' className={styles.input} />
					<TextArea className={styles.textarea} />
					<FormInput placeholder='Tags' className={styles.input} />
					<FormInput placeholder='ImageUrl' className={styles.input} />
				</div>
				<div className={styles.button}>
					<Button type='submit'>Submit</Button>
				</div>
			</form>
		</div>
	)
}
// i wanna fix it
const submitHandler = (e: any) => {
	e.preventDefault()
	const title = e.currentTarget[0].value as string
	const content = e.currentTarget[1].value as string
	const tags = e.currentTarget[2].value as string
	const imageUrl = e.currentTarget[3].value as string
	const body = {
		title,
		tags: [tags],
		content,
		imageUrl
	}
	const post = PostService.createPost(body)
}
