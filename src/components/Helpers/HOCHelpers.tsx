import  { FC, useState, useEffect } from 'react'
import {DataType, GetData, OptionsTypeProps, TypedObject} from "../PropsTypesModel/PropsTypesModel";

const withData = (getData: GetData) => <WP,>(View: FC<WP>) => {
    const Wrapped: FC = (props: WP & DataType) => {
        const [data, setData] = useState<Array<object>>([])
        useEffect(() => {
            getData().then((res) => {
                setData(res)
            })
        }, [])
        return (
            <View {...props} data={data}/>
        )
    }
    return Wrapped
}

const withDataFilter = (filter: Array<string>) => <WP,>(View: FC<WP>) => {
    const Wrapped: FC = (props: WP & DataType) => {
        const {data} = props;
        const filteredData = data.map((el: TypedObject ) => {
            const temp: TypedObject  = {}
            filter.map(key => temp[key] = el[key])
            return temp
        })
        return <View {...props} data={filteredData} />
    }
    return  Wrapped
}

const withSpinner = <WP,>(Spinner: FC) => (View: FC<WP>) => {
    const Wrapped: FC = (props: WP & DataType) => {
        const {data} = props;
        const [loaded, setLoaded] = useState<boolean>(false)
        useEffect(() => {
            if (data.length) setLoaded(true)
        }, [data.length])
        return (
            (!data.length && !loaded) ?
                <Spinner/> :
                <View {...props}/>
        )
    }
    return Wrapped
}

const withListOptions = (options: OptionsTypeProps) => <WP,>(View: FC<WP>) => {
    const Wrapped: FC = (props: WP) => <View {...props} options={options}/>
    return Wrapped
}

export {
    withData,
    withSpinner,
    withDataFilter,
    withListOptions
}