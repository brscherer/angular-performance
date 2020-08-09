# 📝 Summary

### 🔨 Workers

When it comes to heavy process functions, this guy comes in handy to process it outside main thread, keeping it free to compute UI functions, and send result only when it is done.

[Click here to check its implementation](https://github.com/brscherer/angular-performance/tree/master/web-worker)

### ⚠️ OnPush strategy

When you are facing multiple rerenders, this approach can help with performance by disabling default angular change detection, passing the responsibility of detect changes for you to do it imperativily.

PS: Be careful by using this! Default angular's change detection should handle it effectively. Take this as the last try to implement when trying to boost performance

[Click here to check its implementation](https://github.com/brscherer/angular-performance/tree/master/change-detection)