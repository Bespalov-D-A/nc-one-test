import compose from 'compose-function';
import {ReactNode} from 'react';
import WithMuiStyled from './Mui';

//композируем все необходимые для приложения провайдеры
export const withProviders = compose(
	 (component: ReactNode) => <WithMuiStyled component={component} />
);
