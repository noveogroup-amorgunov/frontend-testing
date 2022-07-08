import React from 'react';
import {render} from '@testing-library/react';
import type {RenderResult} from '@testing-library/react';
import {MockStoreEnhanced} from 'redux-mock-store';
import {Provider} from 'react-redux';
import { store, RootState } from 'store'

export async function step(name: string, fn: () => void): Promise<void> {
  await fn();
}

type MountComponentProps = {
    Component: React.ComponentType;
};

type MountComponentResult = {
    component: RenderResult;
    store: MockStoreEnhanced<RootState>;
};

export function mountComponent({
    Component,
}: MountComponentProps): MountComponentResult {
    return {
        component: render(
            <Provider store={store}>
                <Component />
            </Provider>,
        ),
        // @ts-expect-error типизировать store
        store,
    };
}
