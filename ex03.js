function highlightKeyword(content, keyword)
{
    if (typeof content !== "string") return "Invalid"

    keyword = keyword.toLowerCase()

    if (!content.includes(keyword)) return content

    let newContent = content.toLowerCase();
    
    newContent = newContent.replaceAll(keyword, `<strong>${keyword}</strong>`)

    content = content.split(' ')
    newContent = newContent.split(' ')
    
    for (let i in content)
    {
        if (content[i] !== newContent[i])
        {
            if (newContent[i].includes("<strong>"))
            {
                newContent[i] = `<strong>${content[i]}`
            }
            else if (newContent[i].includes("</strong>"))
            {
                newContent[i] = `${content[i]}</strong>`
            }
            else newContent[i] = content[i] 
        }   
    }
    
    return newContent.join(" ")
}

console.log(highlightKeyword("Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?", "thú vị"))