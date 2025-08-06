export const actions = {
	default: async (event) => {
		const { request, cookies, fetch } = event;

		try {
			const formData = await request.formData();
			const username = formData.get('username');
			const password = formData.get('password');

			const res = await fetch(import.meta.env.VITE_API_SERVER_URL + '/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					U_NAME: username,
					U_PASSWORD: password
				})
			});

			if (!res.ok) {
				const errorText = await res.text();
				console.error('API Error:', errorText);
				return { error: 'Terjadi kesalahan saat login. Silakan coba lagi.' };
			}

			const data = await res.json();

			if (data.STATUS === 'SUCCESS') {
				const user = data.PAYLOAD.USER;

				cookies.set('token', user.U_LOGIN_TOKEN, {
					path: '/',
					httpOnly: true,
					sameSite: 'lax',
					secure: import.meta.env.VITE_APPHTTPS === 'true' ? true : false,
					
				});

				cookies.set(
					'user',
					JSON.stringify({
						id: user.U_ID,
						name: user.NAME,
						role: user.ROLE
					}),
					{
						path: '/',
						httpOnly: false,
						secure: import.meta.env.VITE_APPHTTPS === 'true' ? true : false,
					}
				);

				return {
					success: true,
					redirect: '/dashboard'
				};
			} else {
				return {
					error: data.MESSAGE ?? 'Login Gagal'
				};
			}
		} catch (error) {
			console.error('Fetch error:', error);
			return {
				error: 'Gagal terhubung ke server. Coba lagi nanti ya.'
			};
		}
	}
};