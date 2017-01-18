//
//  WXImageLoaderDefaultImplement.swift
//  SwiftWeexSample
//
//  Created by zifan.zx on 19/01/2017.
//  Copyright © 2017 com.taobao.weex. All rights reserved.
//

import Foundation
import WeexSDK
import Swift

class WXImageLoaderDefaultImplement:NSObject, WXImgLoaderProtocol {
    public func downloadImageWithURL(url: String!, imageFrame: CGRect, userInfo options: [NSObject : AnyObject]!, completed completedBlock: ((UIImage!, NSError!, Bool) -> Void)!) -> WXImageOperationProtocol! {
        var temp:String
        if (url.hasPrefix("//")) {
            temp = "http:" + url;
        } else {
            temp = url;
        }
        
        let operation  = SDWebImageManager.sharedManager().downloadImageWithURL(NSURL.init(string: temp), options: SDWebImageOptions.RetryFailed, progress: { (receivedSize:Int, expectedSize:Int) in
        }) { (image: UIImage?, error:NSError?, cacheType:SDImageCacheType, finished:Bool, imageURL:NSURL!) in
                if (completedBlock != nil) {
                    completedBlock(image, error, finished)
                }
        };
        
        return operation as? WXImageOperationProtocol
    }

}
