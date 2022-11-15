/*
    <If test = {expression}>
        <span>...</span>
    </If>

    A ideia deste código é renderizar determinado conteúdo a depender somente da validade da condição que será passada como parâmetro na estrutura if
*/

export default props => {
    if(props.teste == true){
        return props.children
    } else{
        return false
    }
}