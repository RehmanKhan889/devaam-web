import { Redirect } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Auth from './layout/Auth';
import Main from './layout/Main';
import routes from './routes';
import Login from './views/Login';

function App() {
	let { user } = useSelector(state => state.auth);
	return (
		<>
			<BrowserRouter>
				<Switch>
					{routes.map((route , i) => {
						switch (route.layout) {
							case 'main':
								return (
									<Route key={i}  exact path={route.path}>
										<Main>
											<route.component />
										</Main>
									</Route>
								);
							case 'auth':
								return (
									<Route key={i} exact path={route.path}>
										<Auth>
											<route.component />
										</Auth>
									</Route>
								);
						}
					})}
					<div>
						<Route path='/' exact element={Login} />
					</div>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
