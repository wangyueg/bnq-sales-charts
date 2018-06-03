针对多个className情况，实现方式：
 1.ES6模板字符串
   className={`class1 ${A ? 'class2' : 'class3'}`}
 2.array
   className={['class1', A ? 'class2' : 'class3'].join(' ')}
 3.classnames(https://github.com/JedWatson/classnames)
   import classnames from 'classnames'
   classnames('class1', {'class2': true})