## Modules

<dl>
<dt><a href="#module_getFunctionName">getFunctionName</a></dt>
<dd><p>A module for reading package.json</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#returnNotGit">returnNotGit(fileName)</a> ⇒ <code>boolean</code></dt>
<dd><p>returnNotGit - Find files and folders that are not .git</p>
</dd>
</dl>

<a name="module_getFunctionName"></a>

## getFunctionName
A module for reading package.json

<a name="exp_module_getFunctionName--module.exports"></a>

### module.exports(callback) ⇒ <code>string</code> ⏏
Get lambda name module

**Kind**: Exported function  
**Returns**: <code>string</code> - The name of the lambda function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="returnNotGit"></a>

## returnNotGit(fileName) ⇒ <code>boolean</code>
returnNotGit - Find files and folders that are not .git

**Kind**: global function  
**Returns**: <code>boolean</code> - Whether the filename is .git  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>string</code> | The name of the file we are checking |

