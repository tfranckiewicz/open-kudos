import { Select as AntdSelect } from 'antd'
import { SelectProps } from 'antd/lib/select'
import React from 'react'
import { FieldRenderProps } from 'react-final-form'

export interface IOption {
  value: string
  label: string
}

interface IOwnProps {
  options: IOption[]
}

type IProps = SelectProps<string> & IOwnProps

const Select = ({ options, ...selectProps }: IProps): React.SFC<
  FieldRenderProps<string, HTMLSelectElement>
> => ({ input }) => (
  <AntdSelect<string>
    {...selectProps}
    value={input.value}
    onChange={input.onChange}
  >
    {options.map(({ value, label }) => (
      <AntdSelect.Option key={value} value={value}>
        {label}
      </AntdSelect.Option>
    ))}
  </AntdSelect>
)

export default Select
