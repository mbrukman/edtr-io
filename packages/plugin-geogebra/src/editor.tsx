import { GeogebraRenderer } from './renderer'
// import { renderIntoSidebar, Input } from '@splish-me/editor-ui'
import * as React from 'react'
import { StatefulPluginEditorProps } from '@edtr-io/core'
import { geogebraState } from '.'

export const GeogebraEditor = (
  props: StatefulPluginEditorProps<typeof geogebraState>
) => {
  const { focused, editable, state } = props

  return (
    <React.Fragment>
      {focused ? (
        <React.Fragment>
          Geogebra ID:
          <input
            placeholder="1221221"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              state.set(e.target.value)
            }}
            value={state.value}
          />
        </React.Fragment>
      ) : null}
      <GeogebraRenderer state={state} disableCursorEvents={editable} />
    </React.Fragment>
  )
}