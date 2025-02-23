'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import styles from './post.module.css';

const Post = () => {
	const { resolvedTheme } = useTheme();

	return (
		<div className={styles.posts_container}>
			<section>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href='/'>Dashboard</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Posts</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</section>
			<section>
				<Tabs
					defaultValue='all'
					className={`w-[100%] ${styles.tabs_container}`}
				>
					<div className={styles.tabs_list_container}>
						<TabsList className='flex flex-row justify-between'>
							<TabsTrigger
								className={`${styles.tabs_trigger}
                ${
									resolvedTheme === 'dark'
										? styles.tabs_trigger_dark
										: styles.tabs_trigger
								}`}
								value='all'
							>
								All
							</TabsTrigger>
							<TabsTrigger
								className={`${styles.tabs_trigger}
                ${
									resolvedTheme === 'dark'
										? styles.tabs_trigger_dark
										: styles.tabs_trigger
								}`}
								value='active'
							>
								Active
							</TabsTrigger>
							<TabsTrigger
								className={`${styles.tabs_trigger}
                ${
									resolvedTheme === 'dark'
										? styles.tabs_trigger_dark
										: styles.tabs_trigger
								}`}
								value='draft'
							>
								Draft
							</TabsTrigger>
							<TabsTrigger
								className={`${styles.tabs_trigger}
                ${
									resolvedTheme === 'dark'
										? styles.tabs_trigger_dark
										: styles.tabs_trigger
								}`}
								value='archived'
							>
								Archived
							</TabsTrigger>
						</TabsList>
            <Button>Add Post</Button>
					</div>
					<TabsContent value='all'>
						<Card>
							<CardHeader>
								<CardTitle>Account</CardTitle>
								<CardDescription>
									Make changes to your account here. Click save when you're
									done.
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-2'>
								<div className='space-y-1'>
									<Label htmlFor='name'>Name</Label>
									<Input id='name' defaultValue='Pedro Duarte' />
								</div>
								<div className='space-y-1'>
									<Label htmlFor='username'>Username</Label>
									<Input id='username' defaultValue='@peduarte' />
								</div>
							</CardContent>
							<CardFooter>
								<Button>Save changes</Button>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value='active'>
						<Card>
							<CardHeader>
								<CardTitle>Password</CardTitle>
								<CardDescription>
									Change your password here. After saving, you'll be logged out.
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-2'>
								<div className='space-y-1'>
									<Label htmlFor='current'>Current password</Label>
									<Input id='current' type='password' />
								</div>
								<div className='space-y-1'>
									<Label htmlFor='new'>New password</Label>
									<Input id='new' type='password' />
								</div>
							</CardContent>
							<CardFooter>
								<Button>Save password</Button>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value='draft'>
						<Card>
							<CardHeader>
								<CardTitle>Password</CardTitle>
								<CardDescription>
									Change your password here. After saving, you'll be logged out.
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-2'>
								<div className='space-y-1'>
									<Label htmlFor='current'>Current password</Label>
									<Input id='current' type='password' />
								</div>
								<div className='space-y-1'>
									<Label htmlFor='new'>New password</Label>
									<Input id='new' type='password' />
								</div>
							</CardContent>
							<CardFooter>
								<Button>Save password</Button>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value='archived'>
						<Card>
							<CardHeader>
								<CardTitle>Password</CardTitle>
								<CardDescription>
									Change your password here. After saving, you'll be logged out.
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-2'>
								<div className='space-y-1'>
									<Label htmlFor='current'>Current password</Label>
									<Input id='current' type='password' />
								</div>
								<div className='space-y-1'>
									<Label htmlFor='new'>New password</Label>
									<Input id='new' type='password' />
								</div>
							</CardContent>
							<CardFooter>
								<Button>Save password</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</section>
			<section>
				<div></div>
			</section>
			<section></section>
		</div>
	);
};
export default Post;
